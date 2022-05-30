float rotacija=0;
int pvolan=0,tvolan=0;
bool zac = true;
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
int pretvori(int vnos)
{
  switch(vnos)
  {
  case 8: return 1;
  case 9: return 2;
  case 11: return 3;
  case 10: return 4;
  case 14: return 5;
  case 15: return 6;
  case 13: return 7;
  case 12: return 8;
  case 4: return 9;
  case 5: return 10;
  case 7: return 11;
  case 6: return 12;
  case 2: return 13;
  case 3: return 14;
  case 1: return 15;
  case 0: return 0;
  }
  }
void posodobi()
{
  
  int pv= pretvori(pvolan),tv=pretvori(tvolan);
  float korak=4.61;
  if(!zac)
  {
  if(pv==15 && tv==0)
    rotacija-=korak;
  else if(pv==0 && tv==15)
    rotacija+=korak;
  else if(pv<tv)
    rotacija-=korak;
  else
  rotacija+=korak;
  }
  else
  zac=false;
pvolan=tvolan;
 }
int preveri(int izhod)
{
  if(izhod==1)
    if(analogRead(A1)>470)
      return 1;
    else
      return 0;
  else
    if(analogRead(A0)>430)
      return 1;
    else
      return 0;    
}

int preverir()
{
  int vs=0b0000;
  digitalWrite(2,HIGH);
  digitalWrite(3,LOW);
  if(preveri(1))
    vs+=0b10;
  if(preveri(0))
    vs+=0b1000;
  digitalWrite(3,HIGH);
  digitalWrite(2,LOW);
    if(preveri(1))
    vs+=0b1;
  if(preveri(0))
    vs+=0b100;
  return vs;
  }
void loop() {
  Serial.println("{\"plin\": "+String(map(analogRead(A5)-348,0,120,0,33)*3)+",\"bremza\": "+String(map(analogRead(A3)-205,0,120,0,33)*3)+", \"sklopka\":"+String(map(analogRead(A4),0,130,0,33)*3)+",\"volan\":"+String(rotacija)+"}");
  tvolan = preverir();
  if(pvolan != tvolan)
    posodobi();


}
