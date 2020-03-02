@hashtags.each do |hashtag|
  json.set! hashtag.id do
    json.extract! hashtag, :id, :content
  end
end