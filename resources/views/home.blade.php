@extends('layouts.app')

@section('content')
    <section class="section is-fullheight">
        <example-component title="Dashboard">
            @if (session('status'))
                <query-message :success="true" :fail="false" message="{{ session('status') }}"></query-message>
            @endif
            <p style="text-align: center">Welcome <strong>{{ auth()->user()->name }}!</strong></p>
            <div class="flex flex-fill flex-column">
                <div class="flex flex-fill flex-row flex-justify-content-around">
                    <a href="{{ route('animal.index') }}" class="button big">Explore animals</a>
                    <a href="{{ route('animal.create') }}" class="button big">Create animal</a>
                </div>
                <div style="margin-top: 50px" class="flex flex-fill flex-row flex-justify-content-around">
                    <a href="{{ route('species.index') }}" class="button big">Explore species</a>
                    <a href="{{ route('species.create') }}" class="button big">Create species</a>
                </div>
            </div>
        </example-component>
    </section>
@endsection
