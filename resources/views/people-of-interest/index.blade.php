@extends('layouts.main')

@section('content')
    
    {{-- <h1>POI by Controller</h1>

    @foreach ($people as $person)
        <p>{{ $person->name }} is {{ $person->occupation }}</p>

        <p>Known Aliases:</p>
        <ul>
            @foreach ($person->aliases as $alias)
                <li>{{ $alias->alias }}</li>
            @endforeach
        </ul>
        
    @endforeach --}}

    <div id="root"></div>

    <script src="{{ mix("/js/people-of-interest.js") }}"></script>
@endsection
