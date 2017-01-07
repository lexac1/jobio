Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users do
    resources :tasks 
    resources :blocks 
  end   
  
  devise_scope :user do
  	authenticated :user do
    	root :to => 'users#show', as: :authenticated_root
    end
  	unauthenticated :user do
    	root :to => 'devise/registrations#new', as: :unauthenticated_root
  end
end
end
