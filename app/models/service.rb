class Service < ApplicationRecord
    has_many :barber_services
    belongs_to :shop, optional: true
end
