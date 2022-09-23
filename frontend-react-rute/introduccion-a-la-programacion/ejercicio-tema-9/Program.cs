
Cliente cliente = new Cliente();
cliente.setCliente(18,"Pedro",8097890987);
System.Console.WriteLine(cliente.getCliente());


class Persona 
{
    protected int edad;
    protected string nombre;
    protected long telefono;
}

class Cliente : Persona
{
    private int credito = 0;
    public void setCliente(int edad, string nombre, long telefono)
    {
        this.edad = edad;
        this.nombre = nombre;
        this.telefono = telefono;
    }
    public string getCliente()
    {
        return @"El nombre del ciente es: " + nombre
        + " La edad del cliente es: " + edad 
        + " El telefono del cliente es: " + telefono
        + " El credito del cliente es: " + credito;
    }
}

class Trabajador : Persona
{
    private double salario = 15000;

    public void setTrabajador(int edad, string nombre, long telefono)
    {
        this.edad = edad;
        this.nombre = nombre;
        this.telefono = telefono;
    }
    public string getTrahajador()
    {
        return @"El nombre del trabajador es: " + nombre
        + " La edad del trabajador es: " + edad 
        + " El telefono del trabajador es: " + telefono
        + " El salario del trabajador es: " + salario;
    }
    
}