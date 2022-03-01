CREATE SEQUENCE id_sequence
  start 1
  increment 1;
CREATE SEQUENCE item_sequence
  start 1
  increment 1;
do $$
begin
for r in 1..100 loop
insert into public."Item"(
	id, description, url)
	values (nextval('id_sequence'), CONCAT('<h2>Kadrioru uks ', nextval('item_sequence'), '</h2><p>lorem ipsum in the dipsum</p>'), 'IMG_1830.png'),
            (nextval('id_sequence'), CONCAT('<h2>Kadrioru uks ', nextval('item_sequence'), '</h2><p>lorem ipsum in the dipsum</p>'), 'IMG_1831.png'),
            (nextval('id_sequence'), CONCAT('<h2>Kadrioru uks ', nextval('item_sequence'), '</h2><p>lorem ipsum in the dipsum</p>'), 'IMG_1832.png'),
            (nextval('id_sequence'), CONCAT('<h2>Kadrioru uks ', nextval('item_sequence'), '</h2><p>lorem ipsum in the dipsum</p>'), 'IMG_1833.png'),
            (nextval('id_sequence'), CONCAT('<h2>Kadrioru uks ', nextval('item_sequence'), '</h2><p>lorem ipsum in the dipsum</p>'), 'IMG_1834.png'),
            (nextval('id_sequence'), CONCAT('<h2>Kadrioru uks ', nextval('item_sequence'), '</h2><p>lorem ipsum in the dipsum</p>'), 'IMG_1835.png');
end loop;
end;
$$;