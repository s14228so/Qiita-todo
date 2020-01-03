class TodoSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :is_done, :username
  belongs_to :user

  def username
    object.user.name
  end
end
