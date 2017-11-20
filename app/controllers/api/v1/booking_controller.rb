class Api::V1::BookingController < Api::V1::BaseController
    skip_before_action :authenticate_request

    # def getBookingDetails
    #     @barbers = User.where(:shop_id => params[:id])
    #     # @services = BarberService.where(:barber_user_id => @barber)
    #     @services = Service.where(:shop_id => params[:id])
    #
    #     @response = { :barbers => @barbers, :services => @services }
    #     respond_with @response
    # end

    def fetchBookingBarbers
        @barbers = User.where(:shop_id => params[:shop_id])
        respond_with :barbers => @barbers
    end

    def fetchBookingServices
        @services = Service.find_by_sql(services_query)
        respond_with :services => @services
    end

    def services_query
        "SELECT services.id, services.service_name, services.price, services.time FROM services
            INNER JOIN barber_services
            ON barber_services.service_id = services.id
            WHERE barber_services.barber_user_id = #{params[:barber_id]}"
    end
end
