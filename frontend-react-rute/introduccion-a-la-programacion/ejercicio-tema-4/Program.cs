// ----------------------- Condicional If

System.Console.WriteLine("Digite un numero entero: ");
int numeroIf = int.Parse(System.Console.ReadLine());

if(numeroIf > 0)
{
    System.Console.WriteLine("La variable es positiva");
}
else if(numeroIf < 0)
{
    System.Console.WriteLine("La variable es negativa");
}
else{
    System.Console.WriteLine("La variable es 0");
}


// --------------------- Bucle While

int numeroWhile = 0;

while(numeroWhile < 3)
{
    numeroWhile ++;
    System.Console.WriteLine(numeroWhile);
}


// ------------------------- Bucle do While

int numeroDoWhile = 2;

do
{
    numeroDoWhile ++;
    System.Console.WriteLine(numeroDoWhile);
}while(numeroDoWhile < 3);


// ------------------------- Bucle For

for(int numeroFor = 0; numeroFor <= 3; numeroFor ++)
{
    System.Console.WriteLine(numeroFor);
}


// -------------------------- Switch

System.Console.WriteLine("Digite el nombre de la estacion: ");
string estacion = Console.ReadLine().ToUpper();

switch(estacion)
{
    case "PRIMAVERA":
    {
        System.Console.WriteLine("estamos en primavera");
    }break;
    case "VERANO":
    {
        System.Console.WriteLine("estamos en verano");
    }break;
    case "OTONO":
    {
        System.Console.WriteLine("estamos en otono");
    }break;
    case "INVIERNO":
    {
        System.Console.WriteLine("estamos en invierno");
    }break;
    default:
    {
        System.Console.WriteLine("eso no es una estacion");
    }break;
}

