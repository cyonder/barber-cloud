class Api::V1::ShopsController < Api::V1::BaseController
    skip_before_action :authenticate_request

    def index
        respond_with Shop.all
        # TODO: Return default selected city.
    end
end
