Shop.create!(shop_name: 'Seville',
             owner_user_id: '1')

Shop.create!(shop_name: 'Lahori',
             owner_user_id: '4')

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
