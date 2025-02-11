<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Статистика') }}
        </h2>
    </x-slot>

    <div class="container mt-5">
    <div class="row">
        <!-- Статистика пользователей -->
        <div class="col-md-4">
            <div class="card mb-4">
                <div class="card-header">
                    <h5 class="card-title">Пользователи</h5>
                </div>
                <div class="card-body">
                    <h1 class="card-text">{{ $userCount }}</h1>
                    <p class="card-text">Всего зарегистрированных пользователей</p>
                </div>
            </div>
        </div>
        
        <!-- Статистика чатов -->
        <div class="col-md-4">
            <div class="card mb-4">
                <div class="card-header">
                    <h5 class="card-title">Чаты</h5>
                </div>
                <div class="card-body">
                    <h1 class="card-text">{{ $chatCount }}</h1>
                    <p class="card-text">Общее количество чатов</p>
                </div>
            </div>
        </div>
        
        <!-- Статистика сообщений -->
        <div class="col-md-4">
            <div class="card mb-4">
                <div class="card-header">
                    <h5 class="card-title">Сообщения</h5>
                </div>
                <div class="card-body">
                    <h1 class="card-text">{{ $messageCount }}</h1>
                    <p class="card-text">Общее количество сообщений</p>
                </div>
            </div>
        </div>
    </div>
</div>

</x-app-layout>
