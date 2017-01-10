class Block < ApplicationRecord
  belongs_to :category
  belongs_to :user
  default_scope { order("priority ASC") }
end
