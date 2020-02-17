Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    namespace :api, defaults: {format: :json} do
      resource :session, only: [:create, :destroy, :show]
      resources :users, only: [:create, :show, :index]
      resources :scores, only: [:create, :index, :show]
      
      resources :posts, only: [:create, :index, :show, :following]
      resources :posts, only: [:index] do
        collection do
          resources :followed, only: [:index]
        end
      end
    end


    root "static_pages#root"

end
