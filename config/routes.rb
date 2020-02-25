Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    namespace :api, defaults: {format: :json} do
      resource :session, only: [:create, :destroy, :show]
      resources :users, only: [:create, :show, :index]
      resources :userposts, only: [:show]
      resources :feed, only: [:index, :show]
      resources :follows, only: [:create, :destroy]
      resources :comments, only: [:create, :destroy]
      resources :hashtags, only: [:show]
      resources :scores, only: [:create, :index, :show]
      resources :likes, only: [:create, :destroy]
      resources :posts, only: [:create, :index, :show, :following]
    end


    root "static_pages#root"

end
