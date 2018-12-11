class Bench < ApplicationRecord
    validates :lat, :long, presence: true
end
