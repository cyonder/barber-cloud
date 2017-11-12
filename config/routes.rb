Rails.application.routes.draw do
  root to: 'home#index'

  post 'signin', to: 'authentication#authenticate'

  namespace :api, defaults: { format:'json' } do
      namespace :v1 do
          resources :users, only: [:index, :create]
          resources :barbers, only: [:index, :create, :destroy, :update]
      end
  end

  get '*path', to: 'home#index'
end
