#include <DHT.h>
#include <NewPing.h>

#define TRIGGER_PIN  12
#define ECHO_PIN     11
#define MAX_DISTANCE 100

// Pinagem dos sensores e atuadores
const int dhtPin = 2;             // Pino de dados do sensor DHT11
const int primarySoilPin = A0;    // Pino analogico do primeiro sensor de umidade do solo
const int secondarySoilPin = A2;  // Pino analogico do segundo sensor de umidade do solo
const int relayPin = 7;           // Pino de controle do rele

int azul = 3;
int verde = 5;
int vermelho = 4;//saidas do led

DHT dht(dhtPin, DHT11);
NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);

// Definir niveis de umidade
const int umidadeMinima = 800;
const int umidadeMaxima = 500;

// Tempo entre verificacoes de umidade (em milissegundos)
const unsigned long intervaloLeitura = 6000;     // 30min = 30 * 60 * 1000
const unsigned long intervaloRega = 15000;       // 15s 10 * 60 * 1000

const unsigned long intervaloCalor = 10000;      // 10s
int intervalotask2 = intervaloRega;

// Variaveis para temporizacao
unsigned long ultimaLeitura = 0;
unsigned long ultimaRega = 0;

bool chuva = false;
int varAuxUmid = 0;
int varAuxAbs = 0;

void setup() {
  Serial.begin(9600);
  dht.begin();

  pinMode(azul, OUTPUT);
  pinMode(verde, OUTPUT);
  pinMode (vermelho, OUTPUT);

  pinMode(primarySoilPin, INPUT);
  pinMode(secondarySoilPin, INPUT);
  pinMode(relayPin, OUTPUT);
}

void loop() {
  delay(2000);
  unsigned long tempoAtual = millis();

  // Tarefa 1: Verificar temperatura e chance de chuva
  if (tempoAtual - ultimaLeitura >= intervaloLeitura) {
    float temperatura = lerTemperatura();
    float umidade = lerUmidade();
    Serial.print(temperatura);
    Serial.print("°C ");
    Serial.print(umidade);
    Serial.println("%");
    calcularChanceChuva(temperatura, umidade);
    ultimaLeitura = tempoAtual;
  }

  // Tarefa 2: Verificar umidade do solo e quantidade de agua no reservatorio
  if (tempoAtual - ultimaRega >= intervalotask2) {
    int sensorUmidadePrimaria = lerUmidadeSolo(primarySoilPin);
    int sensorUmidadeSecundaria = lerUmidadeSolo(secondarySoilPin);
    varAuxAbs = abs(sensorUmidadePrimaria-sensorUmidadeSecundaria);
    int nivelAgua = verificarNivelAgua();

    verificarCondicoesIrrigacao(sensorUmidadePrimaria, sensorUmidadeSecundaria, nivelAgua);

    ultimaRega = tempoAtual;
  }

  verificarNivelAgua();
}

float lerTemperatura() {
  return dht.readTemperature();
}

float lerUmidade() {
  return dht.readHumidity();
}

void calcularChanceChuva(float temperatura, float umidade) {
  if (temperatura < 25 && umidade > 60) { 
    Serial.println("Chance de chuva alta!");
    chuva=true;
  } else {
    Serial.println("Sem chuva prevista.");
    if(temperatura > 35) {
      intervalotask2 = intervaloCalor;
    }else{
      intervalotask2 = intervaloRega;
    }
    chuva=false;
  }
}

int lerUmidadeSolo(int pin) {
  return analogRead(pin);
}

int verificarNivelAgua() {
  Serial.print("Ping: ");
  int distancia = sonar.ping_cm();
  Serial.print(distancia); 
  Serial.println("cm");
  if(distancia>15){// led verde
    digitalWrite(vermelho,LOW);
    digitalWrite(verde,HIGH);
    digitalWrite(azul,HIGH);
  }
  if(distancia<15 && 10<distancia){// led azul
    digitalWrite(vermelho,HIGH);
    digitalWrite(verde,HIGH);
    digitalWrite(azul,LOW);
  }
  if(distancia<5){// led vermelho
    digitalWrite(vermelho,HIGH);
    digitalWrite(verde,LOW);
    digitalWrite(azul,HIGH);
  }
  return(distancia);
}

void verificarCondicoesIrrigacao(int sensorUmidadePrimaria, int sensorUmidadeSecundaria, int nivelAgua) {
  if(varAuxAbs<100){
    Serial.println("entroucond1");
    if (sensorUmidadePrimaria > umidadeMaxima && nivelAgua < 15 && chuva == false) {
      Serial.println("Iniciar irrigacao.");
      acionarRega();
      } else {
        Serial.println("Condicoes nao atendidas para irrigacao.");
        desligarRega();
      }
      if (sensorUmidadePrimaria < umidadeMinima) {
        desligarRega();
      }
  }else{
    if(varAuxAbs > 100){
      Serial.println("entroucond2");
      if (sensorUmidadeSecundaria > umidadeMaxima && nivelAgua < 15 && chuva == false) {
        Serial.println("Iniciar irrigacao.");
        acionarRega();
      } else {
        Serial.println("Condicoes nao atendidas para irrigacao.");
        desligarRega();
      }
      if (sensorUmidadeSecundaria < umidadeMinima) {
        desligarRega();
      }
    }else{
      Serial.println("Erro nos sensores.");
      desligarRega();
    }
  }
  Serial.print("Sensor primario:");
  Serial.println(sensorUmidadePrimaria);
  Serial.print("Sensor secundario:");
  Serial.println(sensorUmidadeSecundaria);
  varAuxUmid = sensorUmidadePrimaria;
}

void acionarRega() {
  digitalWrite(relayPin, HIGH);  // Liga o rele
  Serial.println("bomba ativada");
  delay(5000);                   // rega durante 5s
  desligarRega();                // Desliga a rega apos o tempo especificado
}

void desligarRega() {
  digitalWrite(relayPin, LOW);  // Desliga o rele
  Serial.println("bomba desativada");
}
