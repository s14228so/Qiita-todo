Rails.application.routes.draw do
  get 'users/index'
  get 'users/create'
  namespace :v1 do
    resources :todos, only: [:create, :destroy]
    resources :users, only: [:index, :create]
  end
end
