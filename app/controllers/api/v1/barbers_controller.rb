class Api::V1::BarbersController < Api::V1::BaseController
    def index
        respond_with User.where(:shop_id => @current_user.shop_id)
    end

    def create
        @barber = User.new(barber_params)
        @barber.shop_id = @current_user.shop_id
        @barber.role_id = '3'
        @barber.password = '123456789'

        if @barber.save
            respond_with :api, :v1, @barber, location: nil
        end
    end

    def destroy
        respond_with User.destroy(params[:id])
    end

    def update
        @barber = User.find(params[:id])

        if @barber.update_attributes(barber_params)
            respond_with @barber, location: nil
        end
    end

    private

    def barber_params
        params.require(:barber).permit(:shop_id, :role_id, :first_name, :last_name, :email, :phone, :password)
    end
end
