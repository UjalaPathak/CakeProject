using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace BuyNowtblAPI.CTSModel
{
    public partial class CakeShopContext : DbContext
    {
        public CakeShopContext()
        {
        }

        public CakeShopContext(DbContextOptions<CakeShopContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admincaketbl> Admincaketbls { get; set; }
        public virtual DbSet<BuyNowtbl> BuyNowtbls { get; set; }
        public virtual DbSet<Paymenttbl> Paymenttbls { get; set; }
        public virtual DbSet<Registrationtbl> Registrationtbls { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=KANINI-LTP-497\\SQLSERVER2019NAN;Database=CakeShop;User ID=sa;Password=Nandhini@sql;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Admincaketbl>(entity =>
            {
                entity.HasKey(e => e.Cakeid)
                    .HasName("PK__admincak__D0BC6463A0BB3CA9");

                entity.ToTable("admincaketbl");

                entity.Property(e => e.Cakeid).HasColumnName("cakeid");

                entity.Property(e => e.Cakename)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("cakename");

                entity.Property(e => e.Cakepicture)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("cakepicture");

                entity.Property(e => e.Cakeweight)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("cakeweight");

                entity.Property(e => e.Price)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("price");

                entity.Property(e => e.Shape)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("shape");
            });

            modelBuilder.Entity<BuyNowtbl>(entity =>
            {
                entity.HasKey(e => e.Orderid)
                    .HasName("PK__BuyNowtb__080E3775F535D9A4");

                entity.ToTable("BuyNowtbl");

                entity.Property(e => e.Orderid).HasColumnName("orderid");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Cakeid).HasColumnName("cakeid");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Phoneno)
                    .IsRequired()
                    .HasMaxLength(12)
                    .IsUnicode(false);

                entity.Property(e => e.Pincode)
                    .IsRequired()
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.State)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Cake)
                    .WithMany(p => p.BuyNowtbls)
                    .HasForeignKey(d => d.Cakeid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__BuyNowtbl__cakei__48CFD27E");
            });

            modelBuilder.Entity<Paymenttbl>(entity =>
            {
                entity.HasKey(e => e.Paymentid)
                    .HasName("PK__Paymentt__AF26EBEEB9C4FA6F");

                entity.ToTable("Paymenttbl");

                entity.Property(e => e.Paymentid).HasColumnName("paymentid");

                entity.Property(e => e.CardHolderName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CardNumber)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Cvv)
                    .IsRequired()
                    .HasMaxLength(3)
                    .IsUnicode(false)
                    .HasColumnName("CVV");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Paymenttbls)
                    .HasForeignKey(d => d.Userid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Paymenttb__Useri__4AB81AF0");
            });

            modelBuilder.Entity<Registrationtbl>(entity =>
            {
                entity.HasKey(e => e.Userid)
                    .HasName("PK__Registra__1797D0248554954E");

                entity.ToTable("Registrationtbl");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RePassword)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
