class Service < ApplicationRecord
    belongs_to :shop, optional: true
end
