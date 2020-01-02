Rails.application.routes.draw do
  namespace :v1 do
    resources :todos
    resources :users
  end
end
