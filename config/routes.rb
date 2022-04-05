Rails.application.routes.draw do
  # generates all devise routes
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
namespace :api do 
  resources :sellers
  resources :buyers
  resources :products
  
  get '/seller_products', to: 'products#show1'
end
end
