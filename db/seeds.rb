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

Shop.create!(shop_name: 'Seville',
             owner_user_id: '1')

Shop.create!(shop_name: 'Lahori',
             owner_user_id: '4')
