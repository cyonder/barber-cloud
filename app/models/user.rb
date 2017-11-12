class User < ApplicationRecord
    has_secure_password

    belongs_to :role, optional: true
    belongs_to :shop, optional: true

    # IMPORTANT: Any validation changes made in this file should also be
    # implemented in JavaScript validations.
    #
    # - Ruby regex is different than JS regex. Ruby starts with \A and ends
    # with \z

    EMAIL_REGEX = /\A^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$\z/
    ALL_LETTERS_AND_SINGLE_SPACE_REGEX = /\A^[^\s\d]*(\s[^\s\d]*)?$\z/

    # -- First Name -------------------------------------------------------------- #
    validates :first_name,
              presence:     { message: 'First name is required' },
              format:       { with: ALL_LETTERS_AND_SINGLE_SPACE_REGEX, message: 'Wrong first name format' },
              length:       { maximum: 20, message: 'First name cannot be longer than 20 characters' }

    # -- Last Name --------------------------------------------------------------- #
    validates :last_name,
              presence:     { message: 'Last name is required' },
              format:       { with: ALL_LETTERS_AND_SINGLE_SPACE_REGEX, message: 'Wrong first name format' },
              length:       { maximum: 20, message: 'Last name cannot be longer than 20 characters' }

    # -- Email ------------------------------------------------------------------- #
    validates :email,
              presence:     { message: 'Email is required' },
              format:       { with: EMAIL_REGEX, message: 'Wrong email format' },
              length:       { maximum: 50, message: 'Email cannot be longer than 50 characters' },
              uniqueness:   { case_sensitive: false, message: 'This email is already registered' }

    # -- Password ---------------------------------------------------------------- #
    validates :password,
              presence:     { message: 'Password is required' },
              length:       { minimum: 8, message: 'Password should be at least 8 characters long' },
              if: Proc.new {new_record? || !password.nil?}
end
