class Api::V1::ServicesController < Api::V1::BaseController
    def index
        respond_with Service.where(:shop_id => @current_user.shop_id)
    end

    def create
        @service = Service.new(service_params)
        @service.shop_id = @current_user.shop_id

        if @service.save
            respond_with :api, :v1, @service, location: nil
        end
    end

    def destroy
        respond_with Service.destroy(params[:id])
    end

    def update
        @service = Service.find(params[:id])

        if @service.update_attributes(service_params)
            respond_with @service, location: nil
        end
    end

    private

    def service_params
        params.require(:service).permit(:shop_id, :service_name, :price, :time)
    end
end
