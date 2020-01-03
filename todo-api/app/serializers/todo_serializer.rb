class TodoSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :is_done
  belongs_to :user
end
