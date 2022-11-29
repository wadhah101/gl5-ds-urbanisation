# Report Urbanisation

Group members :

- Wadhah Mahrouk

- Ali Achour

- Amal Missaoui

## Technology choice

### Backend

Typescript/NestJS

### Database

postgresql

## Creating the project

```bash
nest new ds-urba
```

### The employee model

```ts
@Entity()
export class Emplyee {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public salaryDollars: number;
}
```

### The controller and API endpoints

Endpoints in nestJS are defined in controllers like `src/emplyee/emplyee.controller.ts`

```ts
@Controller('employee')
export class EmplyeeController {
  constructor(private readonly emplyeeService: EmplyeeService) {}

  @Post()
  create(@Body() createEmplyeeDto: CreateEmplyeeDto) {
    return this.emplyeeService.create(createEmplyeeDto);
  }

  @Get()
  findAll() {
    return this.emplyeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emplyeeService.findOne(+id);
  }

  @Get(':id/salary-euro')
  salaryEuro(@Param('id') id: string) {
    return this.emplyeeService.salaryEuro(+id);
  }
  @Get(':id/salary-dollar')
  salaryDollar(@Param('id') id: string) {
    return this.emplyeeService.salaryDollars(+id);
  }
  // ....
```
