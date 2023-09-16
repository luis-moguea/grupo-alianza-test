<?php

use App\Http\Controllers\Controller;
use App\Models\Empleado;
use Illuminate\Http\Request;

class EmpleadoController extends Controller
{
    public function create()
    {
        return view('formulario');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            
        ]);

        Empleado::create($request->all());

        return redirect('/empleados')->with('success', 'Empleado creado exitosamente');
    }

    public function edit(Empleado $empleado)
    {
        return view('formulario', compact('empleado'));
    }

    public function update(Request $request, Empleado $empleado)
    {
        $request->validate([
            'nombre' => 'required',
        ]);

        $empleado->update($request->all());

        return redirect('/empleados')->with('success', 'Empleado actualizado exitosamente');
    }
}
