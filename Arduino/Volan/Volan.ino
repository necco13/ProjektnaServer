void setup() {
  Serial.begin(115200);
  pinMode(A1,INPUT);
  pinMode(A0,INPUT);
  pinMode(A3,INPUT);
  pinMode(A4,INPUT);
  pinMode(A5,INPUT);
  pinMode(2,OUTPUT);
  pinMode(3,OUTPUT);
}

int preveri(int izhod)
{
  if(izhod==1)
    if(analogRead(A1)>530)
      return 1;
    else
      return 0;
  else
    if(analogRead(A0)>530)
      return 1;
    else
      return 0;    
}
int i1,i2,i3,i4;
void loop() {
  Serial.println("{\"plin\": "+String(100-(analogRead(A5)-560))+",\"bremza\": "+String(100-(analogRead(A3)-690))+", \"sklopka\":"+String(100-(analogRead(A4)-800))+",\"volan\":"+String(180)+"}");
  digitalWrite(2,HIGH);
  digitalWrite(3,LOW);
  i1 = preveri(1);
  i3 = preveri(0);
  digitalWrite(3,HIGH);
  digitalWrite(2,LOW);
  i2 = preveri(1);
  i4 = preveri(0);

}
