Rails.application.routes.draw do
  get 'user/show', to: 'user#show'
  devise_for :users
  root to: 'pages#home'

  resources :venues, only: [:index, :show, :new, :create] do
    resources :bookings, only: [:new, :index, :create]
    resources :reviews, only: [:new]
  end

  resources :users, only: [:show] do
    resources :chatrooms, only: [:index]
  end

  resources :chatrooms, only: [:new, :show] do
    resources :messages, only: [:new]
  end

  resources :tours, only: [:new, :create, :show, :index] do
    resources :bookings, only: [:show, :index]
  end
end
