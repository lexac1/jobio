class Block < ApplicationRecord
  belongs_to :category
  belongs_to :user
end
