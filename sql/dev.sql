
CREATE TABLE "public"."r1022"
(
	"p00" varchar(11) NOT NULL, 
  "p01" varchar(500), 
  "utv" varchar(1) DEFAULT 0 NOT NULL, 
  "p02" varchar(500), 
  "sp" 	varchar(1) DEFAULT 0, 
  CONSTRAINT "r1022_pkey" PRIMARY KEY("p00")
);

COMMENT ON COLUMN r1022.p00 IS 'Код';
COMMENT ON COLUMN r1022.p01 IS 'Наименование';

CREATE TABLE "minzdrav"."mpe1gem"
(
	"id"					serial PRIMARY KEY,
	"npp" 				int,
	"r1022" 			varchar(11) ON UPDATE CASCADE ON DELETE CASCADE REFERENCES public.r1022(p00),
	"naim_org" 		varchar(1000),
	"adr_fact" 		varchar(1000),
	"inn" 				varchar(100),
	"plazma_max" 	numeric(17, 6),
	"plazma_cena" numeric(17, 6),
	"erm_max" 		numeric(17, 6),
	"erm_cena" 		numeric(17, 6),
	"immg_max" 		numeric(17, 6),
	"immg_cena" 	numeric(17, 6),
	"alb_max" 		numeric(17, 6),
	"alb_cena" 		numeric(17, 6)
);

COMMENT ON COLUMN "minzdrav"."mpe1gem".npp IS 'номер п.п.';
COMMENT ON COLUMN "minzdrav"."mpe1gem".r1022 IS 'субъект для которого список организаций';
COMMENT ON COLUMN "minzdrav"."mpe1gem".naim_org IS 'Наименование';
COMMENT ON COLUMN "minzdrav"."mpe1gem".adr_fact IS 'Фактический адрес';
COMMENT ON COLUMN "minzdrav"."mpe1gem".inn IS 'ИНН';
COMMENT ON COLUMN "minzdrav"."mpe1gem".plazma_max IS 'Плазма макс';
COMMENT ON COLUMN "minzdrav"."mpe1gem".plazma_cena IS 'Плазма цена';
COMMENT ON COLUMN "minzdrav"."mpe1gem".erm_max IS 'Эр масса макс';
COMMENT ON COLUMN "minzdrav"."mpe1gem".erm_cena IS 'Эр масса цена';
COMMENT ON COLUMN "minzdrav"."mpe1gem".immg_max IS 'Им макс';
COMMENT ON COLUMN "minzdrav"."mpe1gem".immg_cena IS 'Им цена';
COMMENT ON COLUMN "minzdrav"."mpe1gem".alb_max IS 'Альб макс';
COMMENT ON COLUMN "minzdrav"."mpe1gem".alb_cena IS 'Альб цена';
