class Shop < ApplicationRecord
    has_many :users
    has_many :services
end
