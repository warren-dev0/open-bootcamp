Persona persona1= new Persona();

persona1.setEdad(18);
persona1.setNombre("Pedro");
persona1.setTelefono(7458963254);

System.Console.WriteLine($"El nombre de la persona es: {persona1.getNombre()}, tiene {persona1.getEdad()} años y su numero de telefono es: {persona1.getTelefono()}");


class Persona
{
    private int edad;
    private long telefono;
    private string nombre;

    public void setEdad(int edad)
    {
        this.edad = edad;
    }
    public int getEdad()
    {
        return edad;
    }

    public void setTelefono(long telefono)
    {
        this.telefono = telefono;
    }
    public long getTelefono()
    {
        return telefono;
    }

    public void setNombre(string nombre)
    {
        this.nombre = nombre;
    }
    public string getNombre()
    {
        return nombre;
    }
}