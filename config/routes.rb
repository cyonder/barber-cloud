Rails.application.routes.draw do
  root to: 'home#index'

  post 'signin', to: 'authentication#authenticate'

  namespace :api, defaults: { format:'json' } do
      namespace :v1 do
          resources :shops, only: [:index]
          resources :users, only: [:index, :create]
          resources :barbers, only: [:index, :create, :destroy, :update]
          resources :services, only: [:index, :create, :destroy, :update]
          resources :barber_services, only: [:show]

          get 'booking/:shop_id', to: 'booking#fetchBookingBarbers'
          get 'booking/services/:barber_id', to: 'booking#fetchBookingServices'

          post '/barber_services/:barber_id/:service_id', to: 'barber_services#create_barber_services'
          delete '/barber_services/:barber_id/:service_id', to: 'barber_services#destroy_barber_services'
      end
  end

  get '*path', to: 'home#index'
end
