
Coche coche = new Coche();
coche.maquina();

interface Vehiculo
{   
    public void setVelocidadMaxima(double velocidadMaxima);
    public double getVelocidadMaxima();
}

class Maquina
{
    public void maquina()
    {
        System.Console.WriteLine("Esta maquina tiene motor");
    }
}

class Coche : Maquina, Vehiculo
{   
    double velocidadMaxima;
    public void setVelocidadMaxima(double velocidadMaxima)
    {
        this.velocidadMaxima = velocidadMaxima;
    }
    public double getVelocidadMaxima()
    {
        return velocidadMaxima;
    }
}