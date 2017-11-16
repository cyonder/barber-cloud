Shop.create!(shop_name: 'Seville Barber',
             owner_user_id: '1',
             shop_address: '75 Eastdale Avenue, Toronto, ON M4C 5N3')

Shop.create!(shop_name: 'Little London Barber Shop',
             owner_user_id: '4',
             shop_address: '1045 Gerrard St E, Toronto, ON M4M 1Z7')

Shop.create!(shop_name: 'Hastings Barber Shop Danforth',
            owner_user_id: '6',
            shop_address: '1847 Danforth Ave, Toronto, ON M4C 1J3')

Shop.create!(shop_name: 'Magicuts',
            owner_user_id: '7',
            shop_address: '2086 Danforth Ave, Toronto, ON M4C 1J8')

Shop.create!(shop_name: 'Star Mens Hairstyling Barber Shop',
            owner_user_id: '8',
            shop_address: '1088 Victoria Park Ave, East York, ON M4B 2K3')

Shop.create!(shop_name: 'Clean Cuts Barbershop',
            owner_user_id: '9',
            shop_address: '2013 Danforth Ave, Toronto, ON M4C 1J7')

Shop.create!(shop_name: 'Hair Fantasy',
            owner_user_id: '10',
            shop_address: '2418 Danforth Av, Toronto, ON M4C 1K9')

User.create!(shop_id: '1',
               role_id: '2',
               first_name: 'Cagdas',
               last_name: 'Yonder',
               phone: '6478780090',
               email: 'cagdas@yonder.com',
               password: '12121212')

User.create!(shop_id: '1',
               role_id: '3',
               first_name: 'Birand',
               last_name: 'Yonder',
               phone: '6478780090',
               email: 'birand@yonder.com',
               password: '12121212')

User.create!(shop_id: '2',
               role_id: '3',
               first_name: 'Arda',
               last_name: 'Ersan',
               phone: '6478780090',
               email: 'arda@ersan.com',
               password: '12121212')

User.create!(shop_id: '2',
               role_id: '2',
               first_name: 'Anyss',
               last_name: 'Hamza',
               phone: '6478780090',
               email: 'anyss@hamze.com',
               password: '12121212')

User.create!(shop_id: nil,
              role_id: '1',
              first_name: 'Cagim',
              last_name: 'Gunes',
              phone: '6478780090',
              email: 'cagim@gunes.com',
              password: '12121212')

User.create!(shop_id: '3',
             role_id: '2',
             first_name: 'Deneme One',
             last_name: 'Deneme One',
             phone: '6478780090',
             email: 'deneme1@deneme.com',
             password: '12121212')

User.create!(shop_id: '4',
              role_id: '2',
              first_name: 'Deneme Two',
              last_name: 'Deneme Two',
              phone: '6478780090',
              email: 'deneme2@deneme.com',
              password: '12121212')

User.create!(shop_id: '5',
           role_id: '2',
           first_name: 'Deneme Three',
           last_name: 'Deneme Three',
           phone: '6478780090',
           email: 'deneme3@deneme.com',
           password: '12121212')

User.create!(shop_id: '6',
              role_id: '2',
              first_name: 'Deneme Four',
              last_name: 'Deneme Four',
              phone: '6478780090',
              email: 'deneme4@deneme.com',
              password: '12121212')

User.create!(shop_id: '7',
             role_id: '2',
             first_name: 'Deneme Five',
             last_name: 'Deneme Five',
             phone: '6478780090',
             email: 'deneme5@deneme.com',
             password: '12121212')

Role.create!(role_name: 'user')
Role.create!(role_name: 'owner')
Role.create!(role_name: 'barber')
Role.create!(role_name: 'frozen')

Service.create!(shop_id: '1',
           service_name: 'Hair Trim',
           price: '25',
           time: '20')

Service.create!(shop_id: '2',
           service_name: 'Hair Trim',
           price: '35',
           time: '20')

Service.create!(shop_id: '1',
           service_name: 'Line Up',
           price: '10',
           time: '40')

Service.create!(shop_id: '1',
           service_name: 'Kids Haircut',
           price: '30',
           time: '15')

Service.create!(shop_id: '2',
           service_name: 'Beard Trim',
           price: '25',
           time: '20')

Service.create!(shop_id: '2',
           service_name: 'Haircut',
           price: '30',
           time: '30')

Service.create!(shop_id: '1',
           service_name: 'Haircut',
           price: '20',
           time: '30')

BarberService.create!(barber_user_id: '1',
                       service_id: '1')

BarberService.create!(barber_user_id: '1',
                       service_id: '3')

BarberService.create!(barber_user_id: '2',
                       service_id: '1')

BarberService.create!(barber_user_id: '2',
                       service_id: '4')

BarberService.create!(barber_user_id: '3',
                       service_id: '2')

BarberService.create!(barber_user_id: '3',
                       service_id: '5')

BarberService.create!(barber_user_id: '4',
                       service_id: '2')

BarberService.create!(barber_user_id: '4',
                       service_id: '5')
