@extends('layouts.app')

@section('content')
    <h1>Formulario de Empleado</h1>
    <form method="POST" action="{{ isset($empleado) ? route('empleados.update', $empleado->id) : route('empleados.store') }}">
        @csrf
        @if(isset($empleado))
            @method('PUT')
        @endif

        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" value="{{ old('nombre', isset($empleado) ? $empleado->nombre : '') }}">
        

        <button type="submit">{{ isset($empleado) ? 'Actualizar' : 'Crear' }}</button>
    </form>
@endsection
