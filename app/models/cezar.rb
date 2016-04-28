class Cezar < ActiveRecord::Base

  devise :database_authenticatable,
         :trackable,
         :lockable,
         :timeoutable
end
