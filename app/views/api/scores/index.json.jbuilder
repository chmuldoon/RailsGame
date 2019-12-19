@scores.each do |score|
  json.partial! "api/scores/score", sore: score
end
