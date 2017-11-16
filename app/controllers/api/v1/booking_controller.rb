class Api::V1::BookingController < Api::V1::BaseController
    skip_before_action :authenticate_request

    def getBookingDetails
        @barbers = User.where(:shop_id => params[:id])
        @services = Service.where(:shop_id => params[:id])

        @response = { :barbers => @barbers, :services => @services }
        respond_with @response
    end
end
