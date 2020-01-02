Rails.application.routes.draw do
  namespace :api do
    resources :todos
    resources :users
  end
end
