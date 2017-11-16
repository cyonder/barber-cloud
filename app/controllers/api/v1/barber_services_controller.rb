class Api::V1::BarberServicesController < Api::V1::BaseController
    skip_before_action :authenticate_request, except: [:create]

    def show
        respond_with BarberService.where(:service_id => params[:id])
    end

    def create_barber_services
        respond_with :api, :v1, BarberService.create(:barber_user_id => params[:barber_id], :service_id => params[:service_id])
    end

    def destroy_barber_services
        @barbers = BarberService.where(:barber_user_id => params[:barber_id]).
                                 where(:service_id => params[:service_id])
        render :json => @barbers.destroy_all
    end

    # def barbers_for_services_query
    #     "SELECT users.id, users.first_name, users.last_name
    #         FROM users
    #         INNER JOIN services_users
    #         ON services_users.user_id = users.id
    #         WHERE services_users.service_id = #{params[:id]}"
    # end
end
