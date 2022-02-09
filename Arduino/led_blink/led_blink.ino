int LedPin = 13;
int DelayValue = 1000;

void setup() {
  pinMode(LedPin, OUTPUT);
}

void loop() {
  digitalWrite(LedPin, HIGH);   
  delay(DelayValue);                       
  digitalWrite(LedPin, LOW);   
  delay(DelayValue);                       
}
