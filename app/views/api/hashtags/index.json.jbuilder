@hashtags.each do |hashtag|
  json.set! hashtag.id do
    json.extract! hashtag, :id, :content
    json.username hashtag.content[1..-1]
    json.type "hashtag"
  end
end