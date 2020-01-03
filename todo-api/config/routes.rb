Rails.application.routes.draw do
  get 'users/index'
  get 'users/create'
  namespace :v1 do
    resources :todos, only: [:create]
    resources :users, only: [:index, :create]
  end
end
