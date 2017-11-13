class HomeController < ApplicationController
    skip_before_action :authenticate_request, raise: false

    def index
    end
end
