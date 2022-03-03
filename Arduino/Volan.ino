void setup() {
  Serial.begin(115200); // opens serial port, sets data rate to 9600 bps
  pinMode(A5,INPUT);
}

void loop() {
  Serial.println("{\"plin\": "+String(float(analogRead(A5))/float(10.23))+",\"bremza\": "+String(float(analogRead(A5))/float(10.23))+", \"sklopka\":"+String(float(analogRead(A5))/float(10.23))+",\"volan\":"+String(180)+"}");
  delay(100);
}
